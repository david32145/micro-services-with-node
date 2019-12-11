import  DbService from 'moleculer-db'
import SqlAdapter from 'moleculer-db-adapter-sequelize'
import Sequelize  from 'sequelize'
import path from 'path'

const PostService = {
    name: 'post',
    mixins: [DbService],
    adapter: new SqlAdapter({
        dialect: 'sqlite',
        storage: path.join(__dirname, '..', 'database', 'sqlite.db')
    }),
    model: {
        name: "post",
        define: {
            title: Sequelize.STRING,
            content: Sequelize.TEXT,
            votes: Sequelize.INTEGER,
            author: Sequelize.STRING,
            status: Sequelize.BOOLEAN
        },
    },
    actions: {
        index(ctx){
            return this.model.findAll()
                .then(posts => posts)
        },
        show(ctx){
            const { post_id }  = ctx.params
            return this.adapter.findById(post_id).then(post => post)
        },
        store(ctx){
            const { 
                title,
                content,
                author,
            } = ctx.params
            return this.model.create({
                title, content, author, votes: 0, status: true
            }).then(status => status)
        },
        update(ctx){
            const { 
                title,
                content,
                post_id
            } = ctx.params
            console.log(title, content, post_id)
            return this.model.update({
                    title, content
                }, {where: {id: post_id}}).then(status => status)
        },
        destroy(ctx){
            const { post_id }  = ctx.params
            return this.adapter.removeById(post_id).then()
        }
    }
}

export default PostService