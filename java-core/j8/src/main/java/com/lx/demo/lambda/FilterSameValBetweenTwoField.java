package com.lx.demo.lambda;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class FilterSameValBetweenTwoField {

    public static void main(String[] args) {
        //查找user中 firstName == lastName的

        final List<User> userList = Arrays.asList(new User("test", "test"), new User("lisi", "xx"));
        userList.stream().filter(lexicographicComparator("lastName", "firstName"))
                .forEach(System.out::println);
    }

    /**
     * 过滤一个集合中所有属性都相同的对象
     * @param fieldNames
     * @return
     */
    public static Predicate lexicographicComparator(String... fieldNames){
        return o1 -> {
            final Class<?> aClass = o1.getClass();
            final Field declaredField = o1.getClass().getDeclaredField(fieldName);
            declaredField.setAccessible(true);
            declaredField.get(o1)
            for (String fieldName : fieldNames) {
            }
            return false;
        };
    }

    static class User{
        private String firstName;
        private String lastName;

        public User(String firstName, String lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
}
