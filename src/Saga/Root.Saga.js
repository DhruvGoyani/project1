export default function* rootsaga(){
    yield all ([
        authsaga()
    ])
}