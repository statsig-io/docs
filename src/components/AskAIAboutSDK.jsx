import React, { useState, useRef } from 'react';
import { useLocation } from '@docusaurus/router';
import { Button } from './ui/button';
import copy from 'copy-text-to-clipboard';

export default function AskAIAboutSDK() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [performanceMetrics, setPerformanceMetrics] = useState(null);
  const location = useLocation();
  const responseRef = useRef('');

  const getSDKInfo = () => {
    const path = location.pathname;
    let sdkType = 'unknown';
    
    if (path.includes('/client/javascript-sdk')) {
      sdkType = 'javascript';
    } else if (path.includes('/client/react')) {
      sdkType = 'react';
    } else if (path.includes('/client/react-native')) {
      sdkType = 'react-native';
    } else if (path.includes('/client/expo')) {
      sdkType = 'expo';
    }
    
    return {
      sdkType,
      url: window.location.href
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    setIsLoading(true);
    setError('');
    setResponse('');
    
    const sdkInfo = getSDKInfo();
    const startTime = performance.now();
    
    if (typeof window !== 'undefined' && window.statsig) {
      window.statsig.logEvent('ask_ai_query', {
        sdkType: sdkInfo.sdkType,
        query: query,
        url: sdkInfo.url
      });
    }
    
    try {
      const devinApiKey = typeof window !== 'undefined' && window.devinApiKey ? 
        window.devinApiKey : 'placeholder-for-api-key';
      
      const response = await fetch('https://api.devin.com/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${devinApiKey}`
        },
        body: JSON.stringify({
          query,
          context: {
            sdkType: sdkInfo.sdkType,
            url: sdkInfo.url
          }
        })
      });
      
      const endTime = performance.now();
      const responseTime = endTime - startTime;
      
      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      setResponse(data.response);
      responseRef.current = data.response;
      
      const metrics = {
        responseTime: responseTime,
        status: 'success'
      };
      
      setPerformanceMetrics(metrics);
      
      if (typeof window !== 'undefined' && window.statsig) {
        window.statsig.logEvent('ask_ai_response', {
          sdkType: sdkInfo.sdkType,
          query: query,
          responseTime: responseTime,
          url: sdkInfo.url
        });
      }
    } catch (err) {
      setError('Sorry, there was an error processing your question. Please try again.');
      console.error('Error fetching from Devin API:', err);
      
      if (typeof window !== 'undefined' && window.statsig) {
        window.statsig.logEvent('ask_ai_error', {
          sdkType: sdkInfo.sdkType,
          query: query,
          error: err.message,
          url: sdkInfo.url
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const copyToSlack = () => {
    const sdkInfo = getSDKInfo();
    const textToCopy = `Question about ${sdkInfo.sdkType} SDK:\n\n${query}\n\nDevin's Answer:\n\n${responseRef.current}`;
    
    copy(textToCopy);
    
    if (typeof window !== 'undefined' && window.statsig) {
      window.statsig.logEvent('ask_ai_copy_to_slack', {
        sdkType: sdkInfo.sdkType,
        query: query,
        url: sdkInfo.url
      });
    }
  };

  return (
    <div className="ask-ai-container" style={{
      border: '1px solid var(--ifm-color-emphasis-300)',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '20px'
    }}>
      <h3>Ask AI About this SDK</h3>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '12px' }}>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask a question about this SDK..."
            rows={3}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid var(--ifm-color-emphasis-300)'
            }}
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={!query.trim() || isLoading}
        >
          {isLoading ? 'Thinking...' : 'Ask AI'}
        </Button>
      </form>
      
      {isLoading && (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <div className="loading-spinner"></div>
          <p>Generating response...</p>
        </div>
      )}
      
      {error && (
        <div style={{ 
          padding: '10px', 
          marginTop: '15px', 
          backgroundColor: 'rgba(255, 0, 0, 0.1)', 
          borderRadius: '4px',
          color: 'rgb(220, 38, 38)'
        }}>
          {error}
        </div>
      )}
      
      {response && (
        <div style={{ marginTop: '20px' }}>
          <div style={{ 
            backgroundColor: 'var(--ifm-color-emphasis-100)', 
            padding: '16px', 
            borderRadius: '4px',
            marginBottom: '12px' 
          }}>
            <div dangerouslySetInnerHTML={{ __html: response }} />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button 
              variant="outline" 
              onClick={copyToSlack}
            >
              <img src="/img/slack.webp" style={{ height: 15, width: 15, marginRight: '8px' }} />
              Get more help in Slack
            </Button>
            
            {performanceMetrics && (
              <div style={{ fontSize: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
                Response time: {Math.round(performanceMetrics.responseTime)}ms
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
