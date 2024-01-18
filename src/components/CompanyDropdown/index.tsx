// @ts-nocheck
import { updateCompany } from '@/services/current-user';
import { queryCurrent } from '@/services/profile';
import { DownOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Avatar, Col, Dropdown, Input, Menu, Row } from 'antd';
import React, { useEffect } from 'react';

const { Search } = Input;

function CompanyDropdown() {
  const { initialState, setInitialState } = useModel('@@initialState');
  const { companies = [], currentCompany = {} } = initialState || {};

  const onSearch = async (search: string | undefined) => {
    const params = (search && { name: search }) || {};
    const response = await queryCurrent(params);
    setInitialState({
      ...initialState,
      companies: response?.data || [],
      currentCompany: response?.current,
    });
  };

  useEffect(() => {
    onSearch('');
  }, []);

  const onSubmit = async (tenant_id: any, company_id: React.Key | null | undefined) => {
    if (!tenant_id || !company_id) return;

    const currentUser = await updateCompany({
      tenant_id,
      company_id,
    });
    if (!currentUser) return;

    await setInitialState({
      ...initialState,
      currentUser,
    });
    window.location.reload();
  };

  const menu = (
    <Menu>
      <div className="ant-dropdown-menu-item">
        <Search allowClear onSearch={onSearch} enterButton />
      </div>
      {(companies || []).map(
        (company: {
          id: React.Key | null | undefined;
          tenant_id: any;
          status: any;
          tenant: { status: any };
          picture:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined;
          name:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined;
        }) =>
          company?.id && (
            <Menu.Item key={company?.id}>
              <a
                onClick={() => onSubmit(company?.tenant_id, company?.id)}
                style={{
                  background: [company.status, company?.tenant?.status].every((item) => item)
                    ? 'transparent'
                    : '#ffcccc',
                }}
              >
                <Row align="top" gutter={8}>
                  <Col>
                    <Avatar src={company?.picture} />
                  </Col>
                  <Col>{company?.name}</Col>
                </Row>
              </a>
            </Menu.Item>
          ),
      )}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a className="ant-dropdown-link" href="#">
        <Avatar src={currentCompany?.picture} /> {currentCompany?.name} <DownOutlined />
      </a>
    </Dropdown>
  );
}

export default CompanyDropdown;
