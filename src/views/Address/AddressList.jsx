import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Divider, Radio, Empty } from 'antd-mobile'
import { DeleteOutline, EditSOutline } from 'antd-mobile-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLogin } from '@/hooks'
import { getAddressList, setState } from '@/store/features/addressSlice'

export default function Address() {
    const dispatch = useDispatch()
    // const location = useLocation()
    const navigate = useNavigate()

    const state = useSelector((state) => state.address)

    useEffect(() => {
        dispatch(
            getAddressList({
                userId: 221605044199999,
                businessId: 99999,
                storeId: 98962599999,
                validScope: false,
            })
        )
    }, [])

    // 设置默认地址
    const handleRadioChange = (value) => {
        dispatch(setState({ defaultAddressId: value }))
    }

    // 使用地址
    const handleUseAddress = (addressInfo) => {
        return () => {
            console.log(addressInfo)
        }
    }

    return (
        <div className="flex flex-col h-screen">
            <ul className="flex-1 px-16px py-12px overflow-y-auto">
                {state.addressList.length ? (
                    <Radio.Group
                        value={state.defaultAddressId}
                        onChange={handleRadioChange}
                    >
                        {state.addressList.map((item) => (
                            <li
                                className="bg-white px-16px py-12px rounded shadow-md mb-18px"
                                key={item.id}
                            >
                                <div className="flex items-center">
                                    <img
                                        src="https://p9-passport.byteacctimg.com/img/user-avatar/a458986d736ca463e9bdb30fbab0f5e0~300x300.image"
                                        alt=""
                                        className="w-40px h-40px rounded-full"
                                    />
                                    <div className="ml-15px flex flex-1 items-center">
                                        <div className="flex-1 w-0">
                                            <h4 className="text-14px font-semibold truncate">
                                                {item.address}
                                            </h4>
                                            <p className="mt-8px">
                                                <span className="mr-10px">
                                                    {`${item.consignee}${
                                                        item.sex === 1
                                                            ? '先生'
                                                            : '女士'
                                                    }`}
                                                </span>
                                                <span>{item.phone}</span>
                                            </p>
                                        </div>
                                        <Button
                                            className="rounded-full text-txt-subs-color"
                                            size="mini"
                                            onClick={handleUseAddress(item)}
                                        >
                                            使用
                                        </Button>
                                    </div>
                                </div>
                                <Divider />
                                <footer className="flex justify-between">
                                    <Radio
                                        style={{
                                            '--icon-size': `${16 / 37.5}rem`,
                                            '--font-size': `${13 / 37.5}rem`,
                                            '--gap': `${6 / 37.5}rem`,
                                        }}
                                        value={item.id}
                                    >
                                        设为默认
                                    </Radio>
                                    <div className="flex items-center">
                                        <p className="mr-20px flex items-center">
                                            <DeleteOutline className="mr-5px" />
                                            <span>删除</span>
                                        </p>
                                        <p className="flex items-center">
                                            <EditSOutline className="mr-5px" />
                                            <span>编辑</span>
                                        </p>
                                    </div>
                                </footer>
                            </li>
                        ))}
                    </Radio.Group>
                ) : (
                    <Empty
                        imageStyle={{ width: `${128 / 37.5}rem` }}
                        description="暂无数据"
                    />
                )}
            </ul>
            <div className="px-16px py-12px bg-white">
                <Button
                    block
                    color="primary"
                    className="rounded-full"
                    onClick={() => navigate('/address/addAddress')}
                >
                    新增收货地址
                </Button>
            </div>
        </div>
    )
}
