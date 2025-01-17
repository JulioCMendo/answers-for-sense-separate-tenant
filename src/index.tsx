import { useElement, useEffect, useLayout, useInteractionState, useOptions, useRect } from '@nebula.js/stardust';
import properties from './object-properties';
import data from './data';
import ext from './ext';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { Layout, UseOptions } from './types';
import '@qlik/embed-web-components';

export default function supernova() {
  return {
    qae: {
      properties,
      data,
    },
    component() {
      const element = useElement();
      const layout = useLayout() as Layout;
      const interactions = useInteractionState();
      const options = useOptions() as UseOptions;
      const rect = useRect();

      useEffect(() => {
        const root = createRoot(element);
        root.render(
          <App
            interactions={interactions}
            layout={layout}
            options={options}
            rect={rect}
          />
        );
        console.log(layout.props.enableExternalHost, layout.props.authMethod);
        console.log('v0.1.5');
        return () => {
          root.unmount();
        };
      }, [element, layout, interactions, rect, options]);

      useEffect(() => {    
        // Decide which host to use
        let host;
        if (layout.props.enableExternalHost && layout.props.hostUrl) {
          // Safely strip any trailing slash
          host = `https://${layout.props.hostUrl.replace(/\/+$/, '')}`;
        } else {
          host = `https://${window.location.host}`;
        }
        console.log(host);
        document.body.setAttribute('data-qlik-embed-host', host);    
        if (layout.props.authMethod === 'webIntegrationId') {
          document.body.setAttribute('data-qlik-embed-web-integration-id', layout.props.authMethodId || '');
        } else if (layout.props.authMethod === 'clientId') {
          document.body.setAttribute('data-qlik-embed-client-id', layout.props.authMethodId || '');
        }
    
        document.body.setAttribute('data-qlik-embed-cross-site-cookies', 'true');
      }, [layout.props.enableExternalHost, layout.props.hostUrl, layout.props.authMethod, layout.props.authMethodId]);
    
    },
    ext: ext(),
  };
}