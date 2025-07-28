public class 测试类 {
    private String 名称;
    private int 值;
    
    public 测试类(String 名称, int 值) {
        this.名称 = 名称;
        this.值 = 值;
    }
    
    public void 测试方法() {
        System.out.println("Hello from Unicode method!");
    }
    
    public static void main(String[] args) {
        测试类 test = new 测试类("测试", 42);
        test.测试方法();
    }
}