package com.pvthuan.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.io.Serializable;
import java.time.LocalDate;

@Document(collection="issue")
@Data
public class Issue implements Serializable {
    @Id
    private String id;
    private String title;
    private String state;
    private String url;
    private LocalDate created_at;
    private LocalDate updated_at;
}
