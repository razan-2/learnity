import { useParams } from "react-router-dom";

const Feedback = () => {
    const { id } = useParams()
    return (  
        <div>{id}</div>
    );
}
 
export default Feedback;