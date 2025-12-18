package com.guestbook.mapper;

import com.guestbook.dto.response.GuestBookResDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import com.guestbook.dto.request.GuestBookReqDto;

import java.util.List;


@Mapper
public interface GuestBookMapper {
    @Insert("INSERT INTO contents.guestbook (nickname, password, description) " +
            "VALUES (#{nickname}, #{password}, #{description})")
    void insertGuestBook(@Param("nickname") String nickname,
                         @Param("password") String password,
                         @Param("description") String description);


    @Select("SELECT * FROM contents.guestbook t where t.nickname like '% #{nickname} %' ")
    String selectNicknameCheck(@Param("nickname") String nickname);

    @Select ("SELECT id FROM contents.guestbook " +
            "where id > ${lastCursor} " +
            "limit 1 "
    )
    Integer selectByOneNextCursor(@Param("lastCursor") Integer lastCursor);

    // 무한스크롤
    @Select("<script>" +
            "SELECT id, nickname, description, created_at " +
            "FROM contents.guestbook " +
            "<choose>  " +
            "<when test='nextCursor == null'> " +
            "LIMIT #{scrollSize} " +
            "    </when> " +
            "    <otherwise> " +
            "<where> " +
            "id &gt;= #{nextCursor} " +
            "LIMIT #{scrollSize} " +
            "</where> " +
            "    </otherwise> " +
            "    </choose> " +
            "</script>")
    List<GuestBookResDto> searchGuestBookWithCursor(@Param("nextCursor") Integer nextCursor,
                                                    @Param("scrollSize") int scrollSize
                                                 );
}
