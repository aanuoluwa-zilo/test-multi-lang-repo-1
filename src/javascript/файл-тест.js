// Файл для тестирования
// File for testing

const 测试数据 = {
    name: 'Test Data',
    value: 42
};

function тестФункция() {
    console.log('Hello from Russian function!');
    return 测试数据;
}

function testFunction() {
    console.log('Hello from English function!');
    return 测试数据;
}

module.exports = { тестФункция, testFunction };