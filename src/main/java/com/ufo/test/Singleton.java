package com.ufo.test;

/***
 * Describe
 *
 * @author hekang
 * @created 2016/4/29
 */
//懒汉式单例类.在第一次调用的时候实例化
public class Singleton {

    //私有的默认构造子
    private Singleton() {
        //初始化标识位
        setFlag(true);
    }
    //注意，这里没有final
    private static Singleton single=null;
    //静态工厂方法
    public synchronized  static Singleton getInstance() {
        if (single == null) {
            single = new Singleton();
        }
        return single;
    }

    //标识方法是否在调用中 true为调用中，false标识调用完毕
    private static boolean Flag;


    //演示方法调用
    public void Print() {
        setFlag(false);
        System.out.print("准备运行--》\n");
        try {
            for (int i = 0; i < 5; i++) {
                System.out.print("运行中。。。。。\n");
                Thread.sleep(1000);
            }
        } catch (Exception e) {
        }
        System.out.print("运行完毕--》\n");
        //设置标识值为true
        setFlag(true);
    }

    //演示方法调用
    public void Print(String name) {
        setFlag(false);
        System.out.println(name + "准备运行--》");
        try {
            for (int i = 0; i < 5; i++) {
                System.out.println(name + "运行中。。。。。");
                Thread.sleep(1000);
            }
        } catch (Exception e) {
        }
        System.out.print("2运行完毕--》\n");
        //设置标识值为true
        setFlag(true);
    }

    public static boolean getFlag() {
        return Flag;
    }

    private void setFlag(boolean flag) {
        Flag = flag;
    }
}
