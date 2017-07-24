// **这是一条 路由懒加载：结合Vue异步组件及webpack的 code splitting feature
// **这使得打包的时候每个组件（路由）都生成一个对应的独立的.js文件
// component (resolve) { require(['../views/user/UserFans'], resolve) }
// 但是如果把所有文件都合并一起，首屏加载特别慢，所以 在能够异步的则异步
export default [{
    path: '/',
    name: 'root-1',
    component: require('../views/home')
}, { // 首页
    path: '/home',
    name: 'home',
    component: require('../views/home')
}, { // 用户中心
    path: '/user',
    name: 'user',
    component: require('../views/user')
}, { // 我的勋章
    path: '/user/medal',
    name: 'Medal',
    component (resolve) { require(['../views/Medal'], resolve) }
}, { // 智能设备 Ridingdevice
    path: '/user/device',
    name: '/user/device',
    component (resolve) { require(['../views/Ridingdevice'], resolve) }
}, { // 等级权限说明 Rank
    path: '/user/rank',
    name: '/user/rank',
    component (resolve) { require(['../views/Rank'], resolve) }
}, { // 个人中心后台 userAdmin
    path: '/user/userAdmin',
    name: '/user/userAdmin',
    component (resolve) { require(['../views/UserAdmin'], resolve) }
}, { // 修改手机号码  phone
    path: '/user/phone',
    name: '/user/phone',
    component (resolve) { require(['../views/user/PhoneEdit'], resolve) }
}, { // 绑定邮箱  email
    path: '/user/email',
    name: '/user/email',
    component (resolve) { require(['../views/user/EmailEdit'], resolve) }
}, { // 修改密码  password
    path: '/user/password',
    name: '/user/password',
    component (resolve) { require(['../views/user/PasswordEdit'], resolve) }
}, { // 报名卡片  card
    path: '/user/card',
    name: '/user/card',
    component (resolve) { require(['../views/user/EnrollCard'], resolve) }
}, { // 运动装备设置  card
    path: '/user/sportsDevice',
    name: '/user/sportsDevice',
    component (resolve) { require(['../views/user/SportsDevice'], resolve) }
}, { // 编辑个人信息  userInfo
    path: '/user/infoEdit',
    name: '/user/infoEdit',
    component (resolve) { require(['../views/user/UserInfoEdit'], resolve) }
}, { // 我的粉丝/关注的人  UserFans
    path: '/user/fans',
    name: '/user/fans',
    component (resolve) { require(['../views/user/UserFans'], resolve) }
}, { // 查看用户（好友、粉丝、关注人）主页 UserInfoPage
    path: '/user/infoPage',
    name: '/user/infoPage',
    component (resolve) { require(['../views/user/UserInfoPage'], resolve) }
}, { // 俱乐部 Club
    path: '/club',
    name: '/club',
    component: require('../views/club')
}, { // 俱乐部详情 ClubInfo
    path: '/club/info',
    name: '/club/info',
    component (resolve) { require(['../views/club/ClubInfo'], resolve) }
}, { // 搜索模块 Search
    path: '/search',
    name: '/search',
    component (resolve) { require(['../components/Search'], resolve) }
}, { // 路书 Line
    path: '/line',
    name: '/line',
    component: require('../views/line')
}, { // 路书 LineInfo
    path: '/line/info',
    name: '/line/info',
    component (resolve) { require(['../views/line/LineInfoPage'], resolve) }
}, { // 地图 map
    path: '/map',
    name: '/map',
    component: require('../views/map')
}]
//  up更改合并
