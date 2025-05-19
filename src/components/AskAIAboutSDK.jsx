import React, { useState, useRef } from 'react';
import { useColorMode } from '@docusaurus/theme-common/internal';
import { Button } from './ui/button';
import copy from 'copy-text-to-clipboard';

export default function AskAIAboutSDK({ sdkType = 'unknown' }) {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [performanceMetrics, setPerformanceMetrics] = useState(null);
  const responseRef = useRef('');
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';

  const getSDKInfo = () => {
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

  const containerStyle = {
    backgroundColor: isDarkTheme ? '#1e1e1e' : '#ffffff',
    border: isDarkTheme ? '1px solid #333' : '1px solid #ddd',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '32px',
    boxShadow: isDarkTheme ? '0 2px 8px rgba(0,0,0,0.6)' : '0 2px 12px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
  };

  const inputStyle = {
    backgroundColor: isDarkTheme ? '#2c2c2c' : '#f9f9f9',
    color: isDarkTheme ? '#fff' : '#000',
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: isDarkTheme ? '1px solid #555' : '1px solid #ccc',
    fontSize: '1rem',
  };

  const messageBubble = (isBot = false) => ({
    backgroundColor: isBot
      ? (isDarkTheme ? '#333' : '#f0f0f0')
      : (isDarkTheme ? '#007bff' : '#e0f0ff'),
    color: isBot ? (isDarkTheme ? '#eee' : '#333') : '#000',
    alignSelf: isBot ? 'flex-start' : 'flex-end',
    padding: '12px 16px',
    borderRadius: '16px',
    maxWidth: '75%',
    marginBottom: '12px',
    whiteSpace: 'pre-wrap',
  });

  return (
    <div className="ask-ai-container" style={containerStyle}>
      <h3 style={{ marginBottom: '16px' }}>💬 Ask AI About this SDK</h3>

      <form onSubmit={handleSubmit}>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question about this SDK..."
          rows={3}
          style={inputStyle}
        />
        <div style={{ marginTop: '12px' }}>
          <Button type="submit" disabled={!query.trim() || isLoading}>
            {isLoading ? 'Thinking...' : 'Ask AI'}
          </Button>
        </div>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '24px' }}>
        {query && !isLoading && (
          <div style={messageBubble(false)}>
            <strong>You:</strong> {query}
          </div>
        )}

        {isLoading && (
          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <div className="loading-spinner" />
            <p style={{ marginTop: '8px' }}>Generating response...</p>
          </div>
        )}

        {response && (
          <div style={messageBubble(true)}>
            <strong>AI:</strong> <div dangerouslySetInnerHTML={{ __html: response }} />
          </div>
        )}

        {error && (
          <div style={{
            marginTop: '12px',
            padding: '12px',
            borderRadius: '8px',
            backgroundColor: isDarkTheme ? '#4a1f1f' : '#ffe5e5',
            color: isDarkTheme ? '#ffaaaa' : '#cc0000',
          }}>
            {error}
          </div>
        )}
      </div>

      {response && (
        <div style={{
          marginTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Button variant="outline" onClick={copyToSlack}>
            <img
              src="/img/slack.webp"
              alt="Slack"
              style={{ height: 16, width: 16, marginRight: '8px' }}
            />
            Get more help in Slack
          </Button>

          {performanceMetrics && (
            <div style={{
              fontSize: '0.8rem',
              color: isDarkTheme ? '#aaa' : '#666'
            }}>
              Response time: {Math.round(performanceMetrics.responseTime)}ms
            </div>
          )}
        </div>
      )}
    </div>
  );
}
