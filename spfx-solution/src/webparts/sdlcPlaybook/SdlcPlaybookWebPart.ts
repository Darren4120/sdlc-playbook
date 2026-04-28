import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import SdlcPlaybook from './components/SdlcPlaybook';
import { ISdlcPlaybookProps } from './components/ISdlcPlaybookProps';

export interface ISdlcPlaybookWebPartProps {
  description: string;
}

export default class SdlcPlaybookWebPart extends BaseClientSideWebPart<ISdlcPlaybookWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISdlcPlaybookProps> = React.createElement(
      SdlcPlaybook,
      {
        description: this.properties.description,
        isDarkTheme: false,
        environmentMessage: '',
        hasTeamsContext: false,
        userDisplayName: ''
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'SDLC Playbook Configuration'
          },
          groups: [
            {
              groupName: 'Settings',
              groupFields: [
                PropertyPaneTextField('description', {
                  label: 'Description'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
