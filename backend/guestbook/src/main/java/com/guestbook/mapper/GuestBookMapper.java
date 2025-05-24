package com.guestbook.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;


@Mapper
public interface GuestBookMapper {

    @Insert("INSERT INTO contents.guestbook (nickname, password, description, created_at) " +
            "VALUES (#{nickname}, #{password}, #{description}, NOW())")
    void insertGuestBook(@Param("nickname") String nickname,@Param("password") int password,@Param("description") String description);
}
