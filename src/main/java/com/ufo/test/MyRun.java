package com.ufo.test;

/***
 * Describe
 *
 * @author hekang
 * @created 2016/4/29
 */
public class MyRun {

    /**
     * @param args
     */
    public static void main(String[] args) {
        Run r1 = new Run();
        Run r2 = new Run();
        Run r3 = new Run();
        r1.setName("线程1号");
        r2.setName("线程2号");
        r3.setName("线程3号");
        r1.start();
        r2.start();
        r3.start();
    }

}
