import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import Template from './template.hbs';
import { Docs } from '@layouts/Toolbar';

export default () => {
    const template = {__html: Template()}
    return (
        <Documentation docs={Docs} className="is-layout-page">
            <Example heading="Toolbar Example">
                <div dangerouslySetInnerHTML={template}></div>
            </Example>
        </Documentation>
    );
};