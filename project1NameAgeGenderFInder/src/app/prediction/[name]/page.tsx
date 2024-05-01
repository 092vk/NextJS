// functions to handle the api requests

const getPredictedAge = async (name:string)=>{
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    return res.json();
}

const getPredictedGender = async (name:string)=>{
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    return res.json();
}

const getPredictedCountry = async (name:string)=>{
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    return res.json();
}

interface Params{
    params:{name:string};
}

export default async function Name({params}:Params){

    const ageData = getPredictedAge(params.name);
    const genderData = getPredictedGender(params.name);
    const countryData = getPredictedCountry(params.name);
    
    const [age,gender,country] = await Promise.all([
        ageData,
        genderData,
        countryData
    ]);


    return(
        <div>
            <h1>This is a dynamic route , that takes the input of params directly from the url of the website </h1>

            <h2>so the param from dynamic routing we get : {params.name}</h2>


            <div>
                <div>Personal Info </div>
                <div>Age : {age?.age}</div>
                <div>Gender: {gender?.gender}</div>
                <div>Country : {country?.country[0]?.country_id}</div>
            </div>

        </div>
    )
}