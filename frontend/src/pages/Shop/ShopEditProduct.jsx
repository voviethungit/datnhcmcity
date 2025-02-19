import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import EditProductStaff from "../../components/Shop/EditProduct";

const ShopEditProduct = () => {
  return (
    <div>
        <DashboardHeader />
        <div className="flex items-center justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <DashboardSideBar />
            </div>
            <div className="w-full justify-center flex">
                <EditProductStaff />
            </div>
          </div>
    </div>
  )
}

export default ShopEditProduct