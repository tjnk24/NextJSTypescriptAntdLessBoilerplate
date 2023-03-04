import {
    Typography,
    Button,
    Form,
    Input,
} from 'antd';
import {useForm} from 'antd/lib/form/Form';
import React from 'react';

import styles from './Test.module.less';

const {testDiv, testClass} = styles;

const Test = () => {
    const [form] = useForm();

    const onSubmit = async () => {
        const values = await form.validateFields();

        console.log('values', values);
    };

    return (
        <div className={testDiv}>
            test

            <span>
                nested
            </span>

            <span className={testClass}>
                test class
            </span>

            <Typography.Text>
                test text antd
            </Typography.Text>

            <Form
                form={form}
                layout="vertical"
            >
                <Form.Item
                    label="Test Input"
                    rules={[{required: true}]}
                    name="testText"
                >
                    <Input placeholder="enter text"/>
                </Form.Item>

                <Button
                    onClick={onSubmit}
                >
                    test antd button
                </Button>
            </Form>
        </div>
    );
};

export default Test;
