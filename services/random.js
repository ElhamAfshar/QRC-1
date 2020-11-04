//const Math =require ("Math")

exports.RandomBetween=(min , max)=>{
    return Math.floor(Math.random() * (max - min) + min)
}