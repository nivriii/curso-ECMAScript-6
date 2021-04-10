const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) 
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'));
    });
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();


// Manera correcta de usar async - await
const anotherFunction = async() => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}