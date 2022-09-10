import Link from 'next/link';
import Figure from 'react-bootstrap/Figure';
const imgData = [
    {
        id: 1,
        src: '/cat-img-1.png',
        caption: 'Women',
        link: '/bestcategories',
    },
    {
        id: 2,
        src: '/cat-img-2.png',
        caption: 'Men',
        link: '/bestcategories',
    },
    {
        id: 3,
        src: '/cat-img-3.png',
        caption: 'Groups',
        link: '/bestcategories',
    }
]
const bestCategories = () => {
    return (
        <>
            <div style={{ width: "428px", position: "relative", marginTop: "208px" }}>
                <div style={{ fontFamily: 'Poppins' }} className='text-center'>
                    <h3 className="text-center" style={{ paddingTop: "45px", fontWeight: "700", fontSize: "20px" }}>Best Categories</h3>
                    {imgData.map((x, pos) => {
                        return (
                            <>
                                <div key={pos}>
                                    <Figure style={{
                                        margin: "0px",
                                        position: "relative",
                                        top: "20px"
                                    }}>
                                        <Link href={`${x.link}`}>
                                            <Figure.Image
                                                width={171}
                                                height={171}
                                                alt="171x180"
                                                src={x.src}
                                            />
                                        </Link>


                                        <Figure.Caption style={{
                                            fontWeight: "400",
                                            fontSize: "16px",
                                            position: "relative",
                                            top: "-32px",
                                            fontFamily: 'Poppins',
                                            color: "#161622",
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