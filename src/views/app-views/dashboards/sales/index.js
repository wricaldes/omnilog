import React from "react";
import { Row, Col, Button, Card, Table, Tag, Select, Badge } from 'antd';
import Flex from 'components/shared-components/Flex'
import AvatarStatus from 'components/shared-components/AvatarStatus';
import DataDisplayWidget from 'components/shared-components/DataDisplayWidget';
import DonutChartWidget from 'components/shared-components/DonutChartWidget'
import NumberFormat from 'react-number-format';
import { 
	CloudDownloadOutlined, 
	ArrowUpOutlined,
	ArrowDownOutlined,
	UserSwitchOutlined,
	FileDoneOutlined,
	SyncOutlined,
	BarChartOutlined
} from '@ant-design/icons';
import ChartWidget from 'components/shared-components/ChartWidget';
import { COLORS } from 'constants/ChartConstant';
import { 
	weeklyRevenueData, 
	topProductData, 
	customerChartData,
	sessionData, 
  sessionLabels, 
  conbinedSessionData,
	sessionColor,
	recentOrderData
} from './SalesDashboardData'
import moment from 'moment'; 
import { DATE_FORMAT_DD_MM_YYYY } from 'constants/DateConstant'
import utils from 'utils'
import { useSelector } from 'react-redux'

const { Option } = Select;

const getPaymentStatus = status => {
	if(status === 'Paid') {
		return 'success'
	}
	if(status === 'Pending') {
		return 'warning'
	}
	if(status === 'Expired') {
		return 'error'
	}
	return ''
}

const getShippingStatus = status => {
	if(status === 'Ready') {
		return 'blue'
	}
	if(status === 'Shipped') {
		return 'cyan'
	}
	return ''
}

const WeeklyRevenue = () => {
	const { direction } = useSelector(state => state.theme)
	return (<Card>
		<Row gutter={16}>
			<Col xs={24} sm={24} md={24} lg={8}>
				<Flex className="h-100" flexDirection="column" justifyContent="between">
					<div>
						<h4 className="mb-0">Pedidos Semanais</h4>
						<span className="text-muted"> 13- 20 NOV, 2022</span>
					</div>
					<div className="mb-4">
						<h1 className="font-weight-bold">77.088</h1>
						<p className="text-success">
							<span >
								<ArrowUpOutlined />
								<span> 7% </span>
							</span>
							<span>Referente semana passada</span>
						</p>
						<p>Total de pedidos referente semana em andamento.</p>
					</div>
				</Flex>
			</Col>
			<Col xs={24} sm={24} md={24} lg={16}>
				<div className="mb-3 text-right">
					<Button icon={<CloudDownloadOutlined/>}>Download Relatorio</Button>
				</div>
				<ChartWidget 
					card={false}
					series={weeklyRevenueData.series} 
					xAxis={weeklyRevenueData.categories} 
					title="Unique Visitors"
					height={250}
					type="bar"
					customOptions={{colors: COLORS}}
					direction={direction}
				/>
			</Col>
		</Row>
	</Card>)
}

const DisplayDataSet = () => (
	<Row gutter={16}>
		<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
			<DataDisplayWidget 
				icon={<FileDoneOutlined />} 
				value="75.932"
				title="Entregues"	
				color="cyan"
				vertical={true}
				avatarSize={55}
			/>
			<DataDisplayWidget 
				icon={<BarChartOutlined />} 
				value="R$2.870"
				title="Custo Logistica Reversa"	
				color="gold"
				vertical={true}
				avatarSize={55}
			/>
		</Col>
		<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
			<DataDisplayWidget 
				icon={<SyncOutlined />} 
				value="3.5%"
				title="Não Entregues"	
				color="blue"
				vertical={true}
				avatarSize={55}
			/>
			<DataDisplayWidget 
				icon={<UserSwitchOutlined />} 
				value="873"
				title="Retirados por Cliente"	
				color="volcano"
				vertical={true}
				avatarSize={55}
			/>
		</Col>
	</Row>
)

const TopProduct = () => (
	<Card 
		title="Tipos de Produtos" 
		extra={
			<Select defaultValue="week" size="small" style={{minWidth: 110}}>
				<Option value="week">Essa Semana</Option>
				<Option value="month">Esse mês</Option>
				<Option value="year">Esse Ano</Option>
			</Select>
		}
	>
		{topProductData.map(elm => (
			<Flex className="w-100 py-3" justifyContent="between" alignItems="center" key={elm.name}>
				<AvatarStatus shape="square" src={elm.image} name={elm.name} subTitle={elm.category}/>
				<Flex>
					<div className="mr-3 text-right">
						<span className="text-muted">Sales</span>
						<div className="mb-0 h5 font-weight-bold">
							<NumberFormat prefix={'$'} value={elm.sales} thousandSeparator={true} displayType="text" />
							{elm.status === 'up' ? <ArrowUpOutlined className="text-success"/> : <ArrowDownOutlined className="text-danger"/>}
						</div>
					</div>
				</Flex>
			</Flex>
		))}
	</Card>
)

const SalesByCategory = () => (
	<DonutChartWidget 
		series={sessionData} 
		labels={sessionLabels} 
		title="Categorias"
		customOptions={{colors: sessionColor}}
		bodyClass="mb-2 mt-3"
		extra={
			<Row  justify="center">
				<Col xs={20} sm={20} md={20} lg={24}>
					<div className="mt-4 mx-auto" style={{maxWidth: 200}}>
						{conbinedSessionData.map(elm => (
							<Flex alignItems="center" justifyContent="between" className="mb-3" key={elm.label}>
								<div>
									<Badge color={elm.color} />
									<span className="text-gray-light">{elm.label}</span>
								</div>
								<span className="font-weight-bold text-dark">{elm.data}</span>
							</Flex>
						))}
					</div>
				</Col>
			</Row>
		}
	/>
)

const Customers = () => {
	const { direction } = useSelector(state => state.theme)
	return (
		<Card 
			title="Clientes"
			extra={
				<Select defaultValue="week" size="small" style={{minWidth: 110}}>
					<Option value="week">Essa Semana</Option>
					<Option value="month">Esse mês </Option>
					<Option value="year">Esse Ano</Option>
				</Select>
			}
		>
			<Flex>
				<div className="mr-5">
					<h2 className="font-weight-bold mb-1">73.536</h2>
					<p><Badge color={COLORS[6]}/>Essa Semana</p>
				</div>
				<div>
					<h2 className="font-weight-bold mb-1">71.580</h2>
					<p><Badge color={COLORS[0]}/>Semana Passada</p>
				</div>
			</Flex>
			<div>
				<ChartWidget 
					card={false}
					series={customerChartData} 
					xAxis={weeklyRevenueData.categories}
					height={280}
					direction={direction}
					customOptions={
						{
							colors: [COLORS[6], COLORS[0]],
							legend: {
								show: false
							},
							stroke: {
								width: 2.5,
								curve: 'smooth'
							},
						}
					}
				/>
			</div>
		</Card>
	)
}

const tableColumns = [
	{
		title: 'ID',
		dataIndex: 'id'
	},
	{
		title: 'Product',
		dataIndex: 'name',
		render: (_, record) => (
			<Flex>
				<AvatarStatus size={30} src={record.image} name={record.name}/>
			</Flex>
		),
		sorter: (a, b) => utils.antdTableSorter(a, b, 'name')
	},
	{
		title: 'Date',
		dataIndex: 'date',
		render: (_, record) => (
			<span>{moment.unix(record.date).format(DATE_FORMAT_DD_MM_YYYY)}</span>
		),
		sorter: (a, b) => utils.antdTableSorter(a, b, 'date')
	},
	{
		title: 'Order status',
		dataIndex: 'orderStatus',
		render: (_, record) => (
			<><Tag color={getShippingStatus(record.orderStatus)}>{record.orderStatus}</Tag></>
		),
		sorter: (a, b) => utils.antdTableSorter(a, b, 'orderStatus')
	},
	{
		title: 'Payment status',
		dataIndex: 'paymentStatus',
		render: (_, record) => (
			<><Badge status={getPaymentStatus(record.paymentStatus)} /><span>{record.paymentStatus}</span></>
		),
		sorter: (a, b) => utils.antdTableSorter(a, b, 'paymentStatus')
	},
	{
		title: 'Total',
		dataIndex: 'amount',
		render: (_, record) => (
			<span className="font-weight-semibold">
				<NumberFormat
					displayType={'text'} 
					value={(Math.round(record.amount * 100) / 100).toFixed(2)} 
					prefix={'$'} 
					thousandSeparator={true} 
				/>
			</span>
		),
		sorter: (a, b) => utils.antdTableSorter(a, b, 'amount')
	}
]

const RecentOrder = () => (
	<Card />
		
)

const SalesDashboard = () => {

	return (
		<>
			<Row gutter={16}>
				<Col xs={24} sm={24} md={24} lg={16} xl={15} xxl={14}>
					<WeeklyRevenue />
				</Col>
				<Col xs={24} sm={24} md={24} lg={8} xl={9} xxl={10}>
					<DisplayDataSet />
				</Col>
			</Row>
			<Row gutter={16}>
				<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={7} >
					<TopProduct />
				</Col>
				<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={7}>
					<SalesByCategory />
				</Col>
				<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={10}>
					<Customers />
				</Col>
			</Row>
			<Row gutter={16}>
				<Col xs={24} sm={24} md={24} lg={24}>
					<RecentOrder />
				</Col>
			</Row>
		</>
	)
}

export default SalesDashboard
