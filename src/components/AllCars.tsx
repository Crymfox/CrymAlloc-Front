import Card from "./Card"
import useCar from "../hooks/useCar"

const AllCars = () => {
    const {cars, error} = useCar('all')
    return (
        <div className="flex flex-wrap gap-8 justify-center">
            {
                cars.length ? cars.map((data, key) => {
                    return (
                        <Card
                            key={key}
                            id={data.id}
                            type={data.type}
                            color={data.color}
                            price={data.price}
                            status={data.alloc}
                        />
                    )
                }) : <h1> {error} </h1>
            }
        </div>
    )
}

export default AllCars