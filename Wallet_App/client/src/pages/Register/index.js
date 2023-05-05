import React from "react";
import { Col, Form, Row } from 'antd'
import { useNavigate } from "react-router-dom";
function Register() {
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };
    return (
        <div className='m-5'>
            <div className="flex item-center justify-between">
                <h1 className="text-2xl">WALLET BANK - REGISTER  </h1>
                <h1 className="text-sm underline"
                    onClick={() => navigate('/login')} >Already a member,Log in
                </h1>
            </div>
            <hr />
            <Form layout="vertical" onFinish={onFinish} >
                <Row gutter={40}>
                    <Col span={6}>
                        <Form.Item label="First Name" name='firstName'>
                            <input type="text" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Last Name" name='lastName'>
                            <input type="text" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Email" name='email'>
                            <input type="text" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Mobile" name='mobileNumber'>
                            <input type="text" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Identification Type" name='identificationtype'>
                            <select>
                                <option value="NATIONAL_ID">National ID</option>
                                <option value="PASSPORT">Passport</option>
                                <option value="DRIVING LICENSE">Driving License</option>
                                <option value="SOCIAL CARD">Social Security Card</option>
                            </select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Identification Number" name='identificationNumber'>
                            <input type="text" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="Address" name='address'>
                            <textarea type="text" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Password" name='password'>
                            <input type="password" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Confirm Password" name='confirm password'>
                            <input type="password" />
                        </Form.Item>
                    </Col>
                </Row>
                <div className=" flex.justify-end">
                    <button className="Primary-contained-btn" type="submit">Register</button>
                </div>

            </Form>
        </div>
    )
}

export default Register