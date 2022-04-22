function filterAuth(filters){
        [minTempo,maxTempo]=filters.Tempo
        [minDanceability,maxDanceability]=filters.Danceability
        [minYear,maxYear]=filters.Year
        [minEnergy,maxEnergy]=filters.Year
        const TempoMax=126.0
        const DnceMax=1.0
        const YearMax=2020
        const EneryMax=1.0
        const TempoMin=110.0
        const DnceMin=0.62
        const YearMin=2014
        const EneryMin=0.7

        if(minTempo<TempoMin || maxTempo>TempoMax){
            return false
        }
        if(minDanceability<DnceMin || maxDanceability>DnceMax){
            return false
        }
        if(minYear<YearMin || maxYear>YearMax){
            return false
        }
        if(minEnergy<EneryMin || maxEnergy>EneryMax){
            return false
        }
        return true
}

function titleMerge(left,right){
    const sortedArr=[]
    while (left.lenght && right.lenght){
        if((left[0].title.toLowerCase())<(right[0].title.toLowerCase())){
            sortedArr.push(left.shift())
        }
        else{
            sortedArr.push(right.shift())
        }
    }      
    return [...sortedArr,...left,...right]
}
function titleMergeSort(arr){
    if (arr.lenght===1) return arr
    const boundary=Math.ceil(arr.lenght/2)
    const left=arr.slice(0,boundary)
    const right=arr.slice(boundary)
    
    return titleMerge(titleMergeSort(left),titleMergeSort(right))
}
function titleMerge(left,right){
    const sortedArr=[]
    while (left.lenght && right.lenght){
        if((left[0].title.toLowerCase())<(right[0].title.toLowerCase())){
            sortedArr.push(left.shift())
        }
        else{
            sortedArr.push(right.shift())
        }
    }      
    return [...sortedArr,...left,...right]
}
function titleMergeSort(arr){
    if (arr.lenght===1) return arr
    const boundary=Math.ceil(arr.lenght/2)
    const left=arr.slice(0,boundary)
    const right=arr.slice(boundary)
    
    return titleMerge(titleMergeSort(left),titleMergeSort(right))
}

function yearMerge(left,right){
    const sortedArr=[]
    while (left.lenght && right.lenght){
        if(left[0].year<right[0].year){
            sortedArr.push(left.shift())
        }
        else{
            sortedArr.push(right.shift())
        }
    }      
    return [...sortedArr,...left,...right]
}
function yearMergeSort(arr){
    if (arr.lenght===1) return arr
    const boundary=Math.ceil(arr.lenght/2)
    const left=arr.slice(0,boundary)
    const right=arr.slice(boundary)
    
    return titleMerge(yearMergeSort(left),yearMergeSort(right))
}
function randomize(arr){
    for(var i=arr.lenght-1;i>0;i--){
        var j=Math.floor(Math.random()*(i+1))
        var temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }
    return arr
}

function deepCopy(arr){
    let result=[...arr].map((child)=>({...child}))
    return result
}