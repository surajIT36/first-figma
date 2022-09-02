import Figure from 'react-bootstrap/Figure';
import styles from "../styles/bestcategories.module.css";
const imgData= [
    {
        id: 1,
        src: '/cat-img-1.png',
        caption: 'Women'
    },
    {
        id: 2,
        src: '/cat-img-2.png',
        caption: 'Men'
    },
    {
        id: 3,
        src: '/cat-img-3.png',
        caption: 'Groups'
    }
]
const bestCategories = () => {
    return(
        <>
            <div style={{ width: "428px" }}>
                <div style={{fontFamily:'Poppins'}} className='text-center'>
                    <h3 className="text-center" style={{paddingTop:"45px",fontWeight:"700",fontSize:"20px"}}>Best Categories</h3>
                    {imgData.map((x,_id) => {
                        return(
                            <>
                                <div>
                                    <Figure style={{
                                        margin:"0px",
                                        position:"relative",
                                        top:"20px"
                                    }}>
                                        <Figure.Image
                                            width={171}
                                            height={171}
                                            alt="171x180"
                                            src={x.src}
                                        />
                                        <Figure.Caption style={{
                                            fontWeight: "400",
                                            fontSize: "16px",
                                            position: "relative",
                                            top: "-32px",
                                            fontFamily:'Poppins'
                                        }}>{x.caption}</Figure.Caption>
                                    </Figure>
                                </div>
                            </>
                        )
                    })}
                    
                </div>
            </div>
        
        </>
    );
}

export default bestCategories;