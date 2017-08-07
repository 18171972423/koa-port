import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1/koa',{server: {auto_reconnect:true}});

mongoose.Promise=global.Promise;
mongoose.set('debug',true);

const db = mongoose.connection;

db.once('open', () => {
    console.log('连接成功')
})

db.on('error',(error) => {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});


db.on('close', () => {
    console.log('数据库断开，重新连接数据库');
    mongoose.connect('mongodb://127.0.0.1/koa',{server: {auto_reconnect:true}});
});


export default db;