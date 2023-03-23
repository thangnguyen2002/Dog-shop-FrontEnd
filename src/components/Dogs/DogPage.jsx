import DogsCard from "./DogsCard";
import "./dogs.css"

const DogsPage = (props) => { //để nhận props -> truyền props vào
    const {allDogs} = props //destructuring
    return (
        <>
            <section className="dogs-container">
            {/* dung js trong reacjs -> dung` {} */}
                {allDogs.map((dog) => { //loop qua = map
                    return (
                        <div key={dog.id}>
                            <DogsCard 
                            id={dog.id} 
                            name={dog.name} 
                            breed={dog.breed} 
                            description={dog.description} 
                            price={dog.price} 
                            imageUrl={dog.imageUrl}/>
                        </div>
                    )
                })}
            </section>
        </>
    );
}
 
export default DogsPage;