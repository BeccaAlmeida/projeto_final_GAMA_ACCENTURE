class ListUser extends Component{
    componentDidMount() {
        Api.get('/actress/list').then ((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err)
        })
    }
    render(){ 
        return (
            <div>
                    
            </div>
        );
    };
        
}
export default ListUser;