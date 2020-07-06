package com.pizzaordering.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Objects;

@Entity
public class Image extends Auditable<String> {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private String url;

    @ManyToOne
    @JoinColumn(name = "item_id")
    @JsonIgnore
    private Item item;


    public Image(@NotNull String url) {
        this.url = url;
    }

    public Image() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }


    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Image image = (Image) o;
        return id == image.id &&
                Objects.equals(url, image.url) &&
                Objects.equals(item, image.item);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, url, item);
    }
}
