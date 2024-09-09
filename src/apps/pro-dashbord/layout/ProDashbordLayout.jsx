import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import { Layout } from 'antd'

const ProDashbordLayout = ({children, title}) => {
  return (
    <Layout className='h-screen'>
        <SideBar />
        <Layout className='site-layout'>
         <Header title={title}/>
         <Layout.Content className='overflow-y-auto'>
            {children}
         </Layout.Content>
        </Layout>
    </Layout>
  )
}

export default ProDashbordLayout

