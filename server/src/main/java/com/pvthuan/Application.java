package com.pvthuan;

import com.pvthuan.model.Issue;
import com.pvthuan.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoReactiveDataAutoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;

import java.time.LocalDate;
import java.util.Arrays;

@SpringBootApplication(exclude = {MongoReactiveDataAutoConfiguration.class})
@EnableReactiveMongoRepositories(basePackages = {"com.pvthuan.repository"})
public class Application implements CommandLineRunner {
    @Autowired
    IssueRepository repository;

    public static void main(String [] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Issue issue = new Issue();
        issue.setUrl("this is url");
        issue.setState("this is state");
        issue.setTitle("this is title");
        issue.setCreated_at(LocalDate.now());
        issue.setUpdated_at(LocalDate.now());
        repository.saveAll(Arrays.asList(issue))
        .subscribe(System.out::println);
    }
}
