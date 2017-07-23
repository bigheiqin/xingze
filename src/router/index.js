export default [{
    path: '/',
    name: 'root-1',
    component: require('../views/Home')
}, { // 首页
    path: '/home',
    name: 'home',
    component: require('../views/Home')
}, { // 用户中心
    path: '/user',
    name: 'user',
    component: require('../views/User')
}, { // 我的勋章
    path: '/user/medal',
    name: 'Medal',
    component: require('../views/Medal')
}, { // 智能设备 Ridingdevice
    path: '/user/device',
    name: '/user/device',
    component: require('../views/Ridingdevice')
}, { // 等级权限说明 Rank
    path: '/user/rank',
    name: '/user/rank',
    component: require('../views/Rank')
}, { // 个人中心后台 userAdmin
    path: '/user/userAdmin',
    name: '/user/userAdmin',
    component: require('../views/UserAdmin')
}, { // 修改手机号码  phone
    path: '/user/phone',
    name: '/user/phone',
    component: require('../views/user/PhoneEdit')
}, { // 绑定邮箱  email
    path: '/user/email',
    name: '/user/email',
    component: require('../views/user/EmailEdit')
}, { // 修改密码  password
    path: '/user/password',
    name: '/user/password',
    component: require('../views/user/PasswordEdit')
}, { // 报名卡片  card
    path: '/user/card',
    name: '/user/card',
    component: require('../views/user/EnrollCard')
}, { // 运动装备设置  card
    path: '/user/sportsDevice',
    name: '/user/sportsDevice',
    component: require('../views/user/SportsDevice')
}, { // 编辑个人信息  userInfo
    path: '/user/infoEdit',
    name: '/user/infoEdit',
    component: require('../views/user/UserInfoEdit')
}, { // 我的粉丝/关注的人  UserFans
    path: '/user/fans',
    name: '/user/fans',
    component: require('../views/user/UserFans')
}, { // 查看用户（好友、粉丝、关注人）主页 UserInfoPage
    path: '/user/infoPage',
    name: '/user/infoPage',
    component: require('../views/user/UserInfoPage')
}, { // 俱乐部 Club
    path: '/club',
    name: '/club',
    component: require('../views/Club')
}, { // 俱乐部详情 ClubInfo
    path: '/club/info',
    name: '/club/info',
    component: require('../views/club/ClubInfo')
}, { // 搜索模块 Search
    path: '/search',
    name: '/search',
    component: require('../components/Search')
}, { // 路书 Line
    path: '/line',
    name: '/line',
    component: require('../views/Line')
}, { // 路书 LineInfo
    path: '/line/info',
    name: '/line/info',
    component: require('../views/line/LineInfoPage')
}, { // 地图 map
    path: '/map',
    name: '/map',
    component: require('../views/Map')
}]
//  up更改合并
