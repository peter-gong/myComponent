import dva from 'dva';
// const App = () => <div>Hello dva</div>;

// 创建应用
const app = dva();
// 注册视图
// app.router(() => <App />);
app.router(require('./router').default);
// 启动应用
app.start('#root');
