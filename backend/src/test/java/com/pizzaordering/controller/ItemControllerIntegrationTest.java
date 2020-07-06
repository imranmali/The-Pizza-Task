package com.pizzaordering.controller;

import com.pizzaordering.Application;
import com.pizzaordering.config.PropertySourceResolver;
import com.pizzaordering.entity.Item;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.HttpClientErrorException;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ItemControllerIntegrationTest {
	@Autowired
	private TestRestTemplate restTemplate;

	@Autowired
	private PropertySourceResolver propertySourceResolver;


	@LocalServerPort
	private int port;

	private String getRootUrl() {
		return "http://localhost:" + port + propertySourceResolver.getContextPath() + propertySourceResolver.getBasePath()+ "/v1";
	}

	@Test
	public void contextLoads() {

	}


	@Test
	public void testCreateItem() {


		ResponseEntity<Item> postResponse = restTemplate.postForEntity(getRootUrl() + "/item", getItemObject(), Item.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}

	@Test
	public void testGetAllItems() {
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<String> entity = new HttpEntity<String>(null, headers);

		ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/items",
				HttpMethod.GET, entity, String.class);
		
		assertNotNull(response.getBody());
	}

	@Test
	public void testGetItemById() {
		Item item = restTemplate.getForObject(getRootUrl() + "/item/1", Item.class);
		System.out.println(item.getTitle());
		assertNotNull(item);
	}


	@Test
	public void testUpdateItem() {
		int id = 1;
		Item item = restTemplate.getForObject(getRootUrl() + "/item/" + id, Item.class);
		item.setTitle("Chicken Pizza");
		item.setDescription("Chicken cheese pizza ");
		item.setPrice(20);

		restTemplate.put(getRootUrl() + "/item/" + id, item);

		Item updatedItem = restTemplate.getForObject(getRootUrl() + "/item/" + id, Item.class);
		assertNotNull(updatedItem);
	}

	@Test
	public void testDeleteItem() {
		int id = 2;
		Item item = restTemplate.getForObject(getRootUrl() + "/item/" + id, Item.class);
		assertNotNull(item);

		restTemplate.delete(getRootUrl() + "/item/" + id);

		try {
			item = restTemplate.getForObject(getRootUrl() + "/item/" + id, Item.class);
		} catch (final HttpClientErrorException e) {
			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}

	public static Item getItemObject(){
		Item item = new Item();
		item.setTitle("Chicken Pizza");
		item.setDescription("Chicken pizza desc");
		item.setPrice(12);
		item.setId(1);
		return item;
	}
}
