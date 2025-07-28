describe('Unicode Test Suite', () => {
    test('should handle Unicode characters', () => {
        const 测试数据 = { name: '张三', age: 25 };
        expect(测试数据.name).toBe('张三');
    });
    
    test('should handle Russian characters', () => {
        const тестДанные = { name: 'Иван', age: 30 };
        expect(тестДанные.name).toBe('Иван');
    });
});