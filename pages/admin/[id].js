import styles from '../../styles/Home.module.scss'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(path => {
        return {
            params: {
                id: path.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: {
            data
        }
    } 
}


const AdminUser = ({data}) => {
    return ( <div className="content">
        <h1 className={styles.title}>Admin Details</h1>
        <h2>Name: {data.name}</h2>
        <h3>Address: {data.address.city}</h3>
        <p>Email: {data.email}</p>
        <p>Phone No: {data.phone}</p>
    </div>);
}
 
export default AdminUser;