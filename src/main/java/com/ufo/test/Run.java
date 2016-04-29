package com.ufo.test;

/***
 * Describe
 *
 * @author hekang
 * @created 2016/4/29
 */
public class Run extends Thread{

    Singleton s2;
    public  Run() {
        s2=Singleton.getInstance();
    }
    public void run(){
        System.out.println(this.getName() + "--->运行");
        s2.Print(this.getName());
        System.out.println(this.getName() + "--->结束");
        //循环判断
//        while (true) {
//            if (Singleton.getFlag()) {
//                System.out.println(this.getName() + "--->运行");
//                s2.Print();
//                System.out.println(this.getName() + "--->结束");
//                break;//执行完毕退出循环
//            }else {
//                try {
//                    System.out.print(this.getName()+"在等待。。\n");
//                    Thread.sleep(1000);
//                } catch (Exception e) {
//                }
//            }
//        }
    }
}
