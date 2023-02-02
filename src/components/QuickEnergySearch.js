/** @format */

import React, { useState } from "react";
import Link from 'next/link'
import jsonData from "../data/energyCompanies.json";
import "antd/dist/antd.css";
import { Form, Select, Button, Input } from "antd";
import styles from "../styles/QuickEnergySearch.module.css"


const { Option } = Select;
const companies = jsonData.companies;

export default function App() {
  const [postcode, setpostcode] = useState(null)
  const [callApi, setCallApi] = useState(false)
  const [name, setName] = useState();
  const [retailers, setRetailers] = useState(null);


  function handleSubmit(e) {
    console.log(name);
    setCallApi(true)
  }

  const handleChangepostcode = (e) => {
    setpostcode(e.target.value)
    setCallApi(false)
  }

  return <>
      <Form className={styles.form}>
        <Form.Item name="companies" >
          <Select
            onChange={(id) => {
              setName(id);
            }}
            showSearch
            style={{
              width: 200,
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) => {
              return option.children.includes(input);
            }}
            filterSort={(optionA, optionB) =>
              optionA.children
              // .toLowerCase()
              // .localeCompare(optionB.children.toLowerCase())
            }
          >
            {companies?.map((company) => (
              <Option key={company.id} value={company.value}>
                {company.display}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Input input placeholder="Postcode" onChange={(e) => handleChangepostcode(e)} />
        </Form.Item>
        <Form.Item>

          <Link
            href={{
              pathname: '/compare-plans',
              query: { zipcode: postcode },
            }}
            legacyBehavior>
            <Button type="primary" htmlType="submit" onClick={handleSubmit} >
              Sumbit
            </Button>
          </Link>
        </Form.Item>

      </Form>

  </>;
}
