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
  editMode?: boolean;
};

const RoleInputs = ({ onFinish, loading, editMode, form }: Props) => {
  const { data, isLoading, isFetching } = useGetModuleListQuery({});
  const modules: IModule[] = data?.data || [];

  const getPermissionIndex = (moduleId: string): number => {
    const permissions: any[] = form.getFieldValue('permissions') || [];
    const found = permissions.findIndex((p) => p?.module_id === moduleId);
    if (found !== -1) return found;
    // Not found — append a new slot for this module
    permissions.push({ module_id: moduleId });
    form.setFieldsValue({ permissions });
    return permissions.length - 1;
  };

  const getPermission = (moduleId: string) => {
    const permissions: any[] = form.getFieldValue('permissions') || [];
    return permissions.find((p) => p?.module_id === moduleId) || {};
  };

  /* ---------------- PERMISSION TOGGLE LOGIC ---------------- */

  const handlePermissionChange = (
    moduleId: string,
    field: PermissionField,
    checked: boolean,
  ) => {
    const permissions: any[] = form.getFieldValue('permissions') || [];
    const idx = getPermissionIndex(moduleId);
    const current = permissions[idx] || {};

    const updated = {
      ...current,
      module_id: moduleId,
      [field]: checked,
    };

    updated.selected =
      updated.can_read ||
      updated.can_create ||
      updated.can_update ||
      updated.can_delete ||
      false;

    permissions[idx] = updated;
    form.setFieldsValue({ permissions });
  };

  const handleSelectChange = (moduleId: string, checked: boolean) => {
    const permissions: any[] = form.getFieldValue('permissions') || [];
    const idx = getPermissionIndex(moduleId);

    permissions[idx] = {
      ...permissions[idx],
      module_id: moduleId,
      can_read: checked,
      can_create: checked,
      can_update: checked,
      can_delete: checked,
      selected: checked,
    };

    form.setFieldsValue({ permissions });
  };

  /* ---------------- TABLE ---------------- */

  const columns: TableColumnsType<IModule> = [
    {
      title: 'Module',
      key: 'module',
      render: (_, record) => {
        const perm = getPermission(record._id);
        const isSelected =
          perm.can_read ||
          perm.can_create ||
          perm.can_update ||
          perm.can_delete ||
          false;

        // Ensure a slot exists in the permissions array for this module
        const idx = getPermissionIndex(record._id);

        return (
          <>
            {/* module_id hidden field — always present so it is submitted */}
            <Form.Item
              name={[idx, 'module_id']}
              initialValue={record._id}
              hidden
            >
              <input />
            </Form.Item>

            {/* selected checkbox */}
            <Form.Item
              name={[idx, 'selected']}
              valuePropName='checked'
              style={{ margin: 0 }}
            >
              <Checkbox
                checked={isSelected}
                onChange={(e) =>
                  handleSelectChange(record._id, e.target.checked)
                }
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
      align: 'center',
      render: (_, record) => {
        const idx = getPermissionIndex(record._id);
        return (
          <Form.Item
            name={[idx, 'can_read']}
            valuePropName='checked'
            initialValue={false}
            style={{ margin: 0 }}
          >
            <Checkbox
              onChange={(e) =>
                handlePermissionChange(record._id, 'can_read', e.target.checked)
              }
            />
          </Form.Item>
        );
      },
    },

    {
      title: 'Create',
      align: 'center',
      render: (_, record) => {
        const idx = getPermissionIndex(record._id);
        return (
          <Form.Item
            name={[idx, 'can_create']}
            valuePropName='checked'
            initialValue={false}
            style={{ margin: 0 }}
          >
            <Checkbox
              onChange={(e) =>
                handlePermissionChange(
                  record._id,
                  'can_create',
                  e.target.checked,
                )
              }
            />
          </Form.Item>
        );
      },
    },

    {
      title: 'Update',
      align: 'center',
      render: (_, record) => {
        const idx = getPermissionIndex(record._id);
        return (
          <Form.Item
            name={[idx, 'can_update']}
            valuePropName='checked'
            initialValue={false}
            style={{ margin: 0 }}
          >
            <Checkbox
              onChange={(e) =>
                handlePermissionChange(
                  record._id,
                  'can_update',
                  e.target.checked,
                )
              }
            />
          </Form.Item>
        );
      },
    },

    {
      title: 'Delete',
      align: 'center',
      render: (_, record) => {
        const idx = getPermissionIndex(record._id);
        return (
          <Form.Item
            name={[idx, 'can_delete']}
            valuePropName='checked'
            initialValue={false}
            style={{ margin: 0 }}
          >
            <Checkbox
              onChange={(e) =>
                handlePermissionChange(
                  record._id,
                  'can_delete',
                  e.target.checked,
                )
              }
            />
          </Form.Item>
        );
      },
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
                size='small'
                bordered
                columns={columns}
                dataSource={modules}
                pagination={false}
                loading={isLoading || isFetching}
                scroll={{ x: 'max-content' }}
              />
            )}
          </Form.List>
        </Col>
      </Row>

      <FromSubmit
        style={{ marginTop: '16px' }}
        text={editMode ? 'Update' : 'Create'}
        loading={loading}
      />
    </Form>
  );
};

export default RoleInputs;
