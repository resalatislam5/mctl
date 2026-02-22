import {
  Checkbox,
  Col,
  Form,
  Row,
  Table,
  Typography,
  type FormInstance,
  type TableColumnsType,
} from 'antd';

import { FormInputText } from '../../../../common/Form/FormIInput';
import { useGetModuleListQuery } from '../api/roleEndpoints';
import type { ICreateRole } from '../types/roleTypes';
import FromSubmit from '../../../../common/Button/FromSubmit';

interface IModule {
  _id: string;
  name: string;
}

type PermissionField = 'can_read' | 'can_create' | 'can_update' | 'can_delete';

type Props = {
  onFinish: (values: ICreateRole) => void;
  loading: boolean;
  form: FormInstance<ICreateRole>;
};

const RoleInputs = ({ onFinish, loading, form }: Props) => {
  const { data, isLoading, isFetching } = useGetModuleListQuery({});
  const modules: IModule[] = data?.data || [];

  /* ---------------- PERMISSION TOGGLE LOGIC ---------------- */

  const handlePermissionChange = (
    index: number,
    field: PermissionField,
    checked: boolean,
  ) => {
    const permissions = form.getFieldValue('permissions') || [];
    const currentPermission = permissions[index] || {};

    const updatedPermission = {
      ...currentPermission,
      module_id: modules[index]._id,
      [field]: checked,
    };

    // selected is true if any permission is true
    const anyChecked =
      updatedPermission.can_read ||
      updatedPermission.can_create ||
      updatedPermission.can_update ||
      updatedPermission.can_delete ||
      false;

    updatedPermission.selected = anyChecked;

    permissions[index] = updatedPermission;
    form.setFieldsValue({ permissions });
  };

  const handleSelectChange = (index: number, checked: boolean) => {
    const permissions = form.getFieldValue('permissions') || [];
    const currentPermission = permissions[index] || {};

    const updatedPermission = {
      ...currentPermission,
      module_id: modules[index]._id,
      can_read: checked,
      can_create: checked,
      can_update: checked,
      can_delete: checked,
      selected: checked,
    };

    permissions[index] = updatedPermission;
    form.setFieldsValue({ permissions });
  };

  /* ---------------- TABLE ---------------- */

  const columns: TableColumnsType<IModule> = [
    {
      title: 'Module',
      key: 'module',
      render: (_, record, index) => {
        const permissions = form.getFieldValue('permissions') || [];
        const currentPermission = permissions[index] || {};
        const isSelected =
          currentPermission.can_read ||
          currentPermission.can_create ||
          currentPermission.can_update ||
          currentPermission.can_delete ||
          false;

        return (
          <>
            {/* module_id hidden */}
            {isSelected && (
              <Form.Item
                name={[index, 'module_id']}
                initialValue={record._id}
                hidden
              >
                <input />
              </Form.Item>
            )}

            {/* selected checkbox */}
            <Form.Item name={[index, 'selected']} valuePropName='checked'>
              <Checkbox
                checked={isSelected}
                onChange={(e) => handleSelectChange(index, e.target.checked)}
              >
                <Typography.Text style={{ marginLeft: 8 }}>
                  {record.name}
                </Typography.Text>
              </Checkbox>
            </Form.Item>
          </>
        );
      },
    },

    {
      title: 'Read',
      render: (_, __, index) => (
        <Form.Item
          name={[index, 'can_read']}
          valuePropName='checked'
          initialValue={false}
        >
          <Checkbox
            onChange={(e) =>
              handlePermissionChange(index, 'can_read', e.target.checked)
            }
          />
        </Form.Item>
      ),
    },

    {
      title: 'Create',
      render: (_, __, index) => (
        <Form.Item
          name={[index, 'can_create']}
          valuePropName='checked'
          initialValue={false}
        >
          <Checkbox
            onChange={(e) =>
              handlePermissionChange(index, 'can_create', e.target.checked)
            }
          />
        </Form.Item>
      ),
    },

    {
      title: 'Update',
      render: (_, __, index) => (
        <Form.Item
          name={[index, 'can_update']}
          valuePropName='checked'
          initialValue={false}
        >
          <Checkbox
            onChange={(e) =>
              handlePermissionChange(index, 'can_update', e.target.checked)
            }
          />
        </Form.Item>
      ),
    },

    {
      title: 'Delete',
      render: (_, __, index) => (
        <Form.Item
          name={[index, 'can_delete']}
          valuePropName='checked'
          initialValue={false}
        >
          <Checkbox
            onChange={(e) =>
              handlePermissionChange(index, 'can_delete', e.target.checked)
            }
          />
        </Form.Item>
      ),
    },
  ];

  /* ---------------- UI ---------------- */

  return (
    <Form form={form} layout='vertical' onFinish={onFinish}>
      <Row gutter={[12, 12]}>
        <FormInputText name='name' label='Role Name' required lg={24} />

        <Col span={24}>
          <Form.List name='permissions'>
            {() => (
              <Table<IModule>
                rowKey='_id'
                bordered
                columns={columns}
                dataSource={modules}
                pagination={false}
                loading={isLoading || isFetching}
              />
            )}
          </Form.List>
        </Col>
      </Row>

      <FromSubmit text='Submit' loading={loading} />
    </Form>
  );
};

export default RoleInputs;
