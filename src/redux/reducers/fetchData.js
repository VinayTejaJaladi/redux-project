const fetchData = (state={data:'No Data'},action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {data:action.value}
        default:
            return state
    }
}

export default fetchData