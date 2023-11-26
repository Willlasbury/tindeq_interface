const [fakeData, setfakeData] = useState([]);
  
function createFakeData () {
  let count = 0
  console.log("count:", count)
  setInterval(()=>{
    count+=1
    const randNum = Math.floor(Math.random()*10)
    const fakePoint = {
      id: count,
      created_at: Date.now(),
      weight: randNum
    }
    // fakeData.push( fakePoint)
    setfakeData([...fakeData, fakePoint])
    console.log("count:", count)
    if (count > 10) {
      clearInterval(createFakeData)
    }
  },1000)
}