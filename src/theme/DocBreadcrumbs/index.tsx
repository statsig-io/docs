import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useSidebarBreadcrumbs} from '@docusaurus/plugin-content-docs/client';
import {useHomePageRoute} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import HomeBreadcrumbItem from '@theme/DocBreadcrumbs/Items/Home';

import styles from './styles.module.css';

function BreadcrumbsItemLink({
  children,
  href,
  isLast,
}: {
  children: ReactNode;
  href: string | undefined;
  isLast: boolean;
}): JSX.Element {
  const className = 'breadcrumbs__link';
  if (isLast) {
    return (
      <span className={className} itemProp="name">
        {children}
      </span>
    );
  }
  return href ? (
    <Link className={className} href={href} itemProp="item">
      <span itemProp="name">{children}</span>
    </Link>
  ) : (
    <span className={className} itemProp="name">{children}</span>
  );
}

function BreadcrumbsItem({
  children,
  active,
  index,
  addMicrodata,
}: {
  children: ReactNode;
  active?: boolean;
  index: number;
  addMicrodata: boolean;
}): JSX.Element {
  return (
    <li
      {...(addMicrodata && {
        itemScope: true,
        itemProp: 'itemListElement',
        itemType: 'https://schema.org/ListItem',
      })}
      className={clsx('breadcrumbs__item', {
        'breadcrumbs__item--active': active,
      })}>
      {children}
      {addMicrodata && (
        <>
          <meta itemProp="position" content={String(index + 1)} />
        </>
      )}
    </li>
  );
}

function getCategoryHref(item: any): string | undefined {
  if (item.href) {
    return item.href;
  }
  
  if (item.type === 'category') {
    const label = item.label.toLowerCase();
    
    const categoryMappings: Record<string, string> = {
      'products': '/',
      'experiments': '/experiments-plus',
      'feature flags': '/feature-flags/overview',
      'dynamic config': '/dynamic-config',
      'segments': '/segments',
      'release pipeline (beta)': '/release-pipeline',
      'analytics': '/',
      'product analytics': '/product-analytics/overview',
      'management & admin': '/',
      'integrations': '/integrations/introduction',
      'guides': '/',
      'api': '/',
      'sdk': '/',
      'sdk quickstarts': '/',
      'getting started': '/',
      'new to statsig?': '/',
      'low-code experiments': '/guides/sidecar-experiments/introduction',
      'web analytics': '/webanalytics/overview',
      'session replay': '/session-replay/overview',
      'users': '/users',
      'alerts': '/product-analytics/alerts',
      'metric explorer': '/product-analytics/drilldown',
      'templates': '/templates/templates',
      'decision framework': '/exp-templates/decision-framework',
      'organization policies': '/org-admin/organization_policies',
      'terraform': '/integrations/terraform/introduction',
      'azure ai': '/azureai/introduction',
      'datadog triggers': '/integrations/triggers/introduction',
      'api proxies': '/infrastructure/api_proxy/introduction',
      'warehouse ingestion': '/data-warehouse-ingestion/introduction',
      'privacy': '/compliance/introduction',
      'infrastructure operations': '/infrastructure/introduction',
      'workspace management': '/access-management/introduction',
      'access management': '/access-management/introduction',
      'scim user provisioning': '/access-management/scim/overview',
      'okta guide': '/access-management/scim/okta_scim_setup',
      'collaboration': '/access-management/discussions',
      'templates & policies': '/org-admin/organization_policies'
    };
    
    if (categoryMappings[label]) {
      return categoryMappings[label];
    }
    
    for (const [key, value] of Object.entries(categoryMappings)) {
      if (label.includes(key) || key.includes(label)) {
        return value;
      }
    }
    
    return '/';
  }
}

export default function DocBreadcrumbs(): JSX.Element | null {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav
      className={clsx(
        ThemeClassNames.docs.docBreadcrumbs,
        styles.breadcrumbsContainer,
      )}
      aria-label={translate({
        id: 'theme.docs.breadcrumbs.navAriaLabel',
        message: 'Breadcrumbs',
        description: 'The ARIA label for the breadcrumbs',
      })}>
      <ul
        className="breadcrumbs"
        itemScope
        itemType="https://schema.org/BreadcrumbList">
        {homePageRoute && <HomeBreadcrumbItem />}
        {breadcrumbs.map((item, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          const href = isLast ? undefined : getCategoryHref(item);
          return (
            <BreadcrumbsItem
              key={idx}
              active={isLast}
              index={idx}
              addMicrodata={true}>
              <BreadcrumbsItemLink href={href} isLast={isLast}>
                {item.label}
              </BreadcrumbsItemLink>
            </BreadcrumbsItem>
          );
        })}
      </ul>
    </nav>
  );
}
