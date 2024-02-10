

export default function UserProfile(props){
    // console.log(props);
    // console.log(props.name);
    // console.log(props.age);
    // console.log(props.place);
    let {name, age, place} = props;
    return(
        <h2>I am {name}, of age {age}, living in {place}</h2>
    );
};