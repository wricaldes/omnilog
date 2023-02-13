import { 
  DashboardOutlined, 
  AppstoreOutlined,
  FileTextOutlined,
  PieChartOutlined,
  EnvironmentOutlined,
  AntDesignOutlined,
  SafetyOutlined,
  StopOutlined,
  DotChartOutlined,
  MailOutlined,
  MessageOutlined,
  CalendarOutlined,
  BulbOutlined,
  InfoCircleOutlined,
  CompassOutlined,
  LayoutOutlined,
  DesktopOutlined,
  FileDoneOutlined,
  CommentOutlined,
  RobotOutlined,
  PlusCircleOutlined,
  FundOutlined,
  ShoppingCartOutlined,
  BookOutlined,
  FileUnknownOutlined,
  ProfileOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/AppConfig'

const extraNavTree = [
  {
    key: 'extra',
    path: `${APP_PREFIX_PATH}/pages`,
    title: 'Administrativo',
    icon: PlusCircleOutlined,
    breadcrumb: true,
    isGroupTitle: true,
    submenu: [
      {
        key: 'extra-pages',
        path: `${APP_PREFIX_PATH}/pages`,
        title: 'Gestão',
        icon: FileTextOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'extra-pages-profile',
            path: `#`,
            title: 'Empresas',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'extra-pages-list',
            path: `#`,
            title: 'Usuarios',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-pages-invoice',
            path: `#`,
            title: 'Faturamento',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-pages-pricing',
            path: `#`,
            title: 'Pagamentos',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-pages-faq',
            path: `#`,
            title: 'Taxa de Entrega',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'extra-pages-setting',
            path: `#`,
            title: 'Taxa Uso Ponto',
            icon: '',
            breadcrumb: true,
            submenu: []
          }
        ]
      },
      {
        key: 'extra-auth',
        path: `${APP_PREFIX_PATH}`,
        title: 'Integração',
        icon: SafetyOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'extra-auth-login-1',
            path: `#`,
            title: 'Pagamentos',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-auth-login-2',
            path: `#`,
            title: 'LastMile',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-auth-register-1',
            path: `#`,
            title: 'Pontos de Retirada',
            icon: '',
            breadcrumb: true,
            submenu: []
          }
        ]
      }
    ]
  }
]

const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'Relatorio Diario',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    
    {
      key: 'dashboards-sales',
      path: `${APP_PREFIX_PATH}/dashboards/sales`,
      title: 'Pedidos',
      icon: FundOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const appsNavTree = [{
  key: 'apps',
  path: `${APP_PREFIX_PATH}/apps`,
  title: 'Modulos',
  icon: AppstoreOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
   
    {
      key: 'apps-project',
      path: `${APP_PREFIX_PATH}/apps/project`,
      title: 'Remessas',
      icon: FileTextOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'nova-remessa-key',
          path: `#`,
          title: 'Nova Remessa',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-list',
          path: `#`,
          title: 'Importar Remessa',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: `#`,
          title: 'Leitor Código ',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: `#`,
          title: 'Todas Remessas ',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: `#`,
          title: 'Coletas Agendadas',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: `#`,
          title: 'Entregas Agendadas',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: `#`,
          title: 'Coletas Solicitadas',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: `#`,
          title: 'Aprovada',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: `#`,
          title: 'Fornecido',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: `#`,
          title: 'Atribuido',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: `#`,
          title: 'Recebido',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: `#`,
          title: 'Entregue',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: `#`,
          title: 'Devolvido',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: `#`,
          title: 'Remessas Devolvida',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: `#`,
          title: 'Devolvida e Entregue',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
      
    },
    {
      key: 'apps-ecommerce',
      path: `${APP_PREFIX_PATH}/apps/ecommerce`,
      title: 'Rotas',
      icon: EnvironmentOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-ecommerce-productList',
          path: `#`,
          title: 'Todas Rotas',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'apps-ecommerce-addProduct',
          path: `#`,
          title: 'Nova Rota',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'apps-ecommerce',
      path: `#`,
      title: 'Manifesto/CTe',
      icon: FileUnknownOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-ecommerce-productList',
          path: `#`,
          title: 'Todos Manifestos',
          icon: '',
          breadcrumb: true,
          submenu: []
        }
      ]
    },
    {
      key: 'apps-ecommerce',
      path: `#`,
      title: 'Transações',
      icon: FileDoneOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-ecommerce-productList',
          path: `#`,
          title: 'Todas Transações',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'apps-ecommerce-addProduct',
          path: `#`,
          title: 'Nova Transação',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'apps-ecommerce',
      path: `#`,
      title: 'Equipe de Entrega',
      icon: FileDoneOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-ecommerce-productList',
          path: `#`,
          title: 'Cadastrar Novo',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'apps-ecommerce-addProduct',
          path: `#`,
          title: 'Lista de Entregadores',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'apps-ecommerce',
      path: `#`,
      title: 'Relatorios',
      icon: FileDoneOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-ecommerce-productList',
          path: `#`,
          title: 'Novo Relatorio',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'apps-ecommerce-addProduct',
          path: `#`,
          title: 'Salvos',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
  ]
}]

const componentsNavTree = [
  {
    key: 'components',
    path: `#`,
    title: 'Operacional',
    icon: AntDesignOutlined,
    breadcrumb: true,
    isGroupTitle: true,
    submenu: [
      {
        key: 'components-general',
        path: `#`,
        title: 'Pontos de Entrega',
        icon: InfoCircleOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'components-general-button',
            path: `#`,
            title: 'Novo Ponto',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'components-general-icon',
            path: `#`,
            title: 'Todos os Pontos',
            icon: '',
            breadcrumb: true,
            submenu: []
          }
        ]
      },
      {
        key: 'components-layout',
        path: `#`,
        title: 'Controle Locker',
        icon: LayoutOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'components-layout-grid',
            path: `#`,
            title: 'Novo Locker',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'components-layout-layout',
            path: `#`,
            title: 'Todos Lockers',
            icon: '',
            breadcrumb: true,
            submenu: []
          }
        ]
      },
      {
        key: 'components-navigation',
        path: `#`,
        title: 'Nuvem de Entrega',
        icon: CompassOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'components-navigation-affix',
            path: `#`,
            title: 'Fila',
            icon: '',
            breadcrumb: true,
            submenu: []
          }
         
        ]
      },
      
    ]
  }
]

const docsNavTree = [{
  key: 'docs',
  path: `${APP_PREFIX_PATH}/docs`,
  title: '',
  icon: BookOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
   
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...appsNavTree,
  ...componentsNavTree,
  ...extraNavTree,
  ...docsNavTree
]

export default navigationConfig;
