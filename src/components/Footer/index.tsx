// @ts-nocheck
import { links } from '@/constants/general';
import { CopyrightOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const { npm_package_version } = process.env;

const Footer: React.FC = () => {
  const intl = useIntl();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={(links || []).map(({ title, ...link }) => ({
        ...link,
        title: intl.formatMessage({ id: title }),
      }))}
      copyright={
        <>
          Copyright <CopyrightOutlined /> 2024 - {intl.formatMessage({ id: 'version' })}{' '}
          {npm_package_version}
        </>
      }
    />
  );
};

export default Footer;
