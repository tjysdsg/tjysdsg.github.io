---
title:  "C++ Associative Containers: Properties, Internals, and Implementations"
date:   2022-09-02 12:31:47 -0500
excerpt_separator: <!--more-->
toc: true
permalink: /cpp-associative-containers
---

This is my detailed notes about C++'s containers:

- std::set
- std::map
- std::multiset
- std::multimap
- std::unordered_set
- std::unordered_map

**NOTE: I assume that at least C++11 or a newer standard is used**

<!--more-->

# Template Arguments and Typedefs

Frequently used template arguments and typedefs are listed below.

NOTE that `value_type` is NOT the same as "value" in "key-value pair".

## `Compare`

We can override container's key comparison function, which is defined by default as:

```cpp
template<
  class other_args,
  class Compare = std::less<Key>
>
```

See [C++ named requirements: Compare](https://en.cppreference.com/w/cpp/named_req/Compare)

## `key_type`

Key type

## `value_type`

- Same as `key_type` for set/multiset
- `std::pair<key_type, mapped_type>` for map/multimap, where `mapped_type` is user-defined value type

## `iterator`

An iterator to `value_type`

# Common Member Functions

C++ standard defines a set of unified interfaces for accessing and modifying the containers.

- `swap` exchanges the contents of the container with those of other, without invoking any move, copy, or swap
  operations on individual elements.
- `clear` erases all elements from the container. The time complexity is $ O(n) $.
- `begin`, `cbegin`, `end`, `cend`, `rbegin`, `crbegin`, `rend`, `crend` retrieve an iterators to an element. Prefix `c`
  refers to the iterator being `const`. Prefix `r` refers to the iterator being in reversed order.
- `empty`, `size`, `max_size`, and sometimes `capacity`/`reserve`/`shrink_to_fit`

# SET/MAP/MULTISET/MULTIMAP
------------------------------------------------------------------------------------------

- [set](https://en.cppreference.com/w/cpp/container/set)
- [map](https://en.cppreference.com/w/cpp/container/map)
- [multiset](https://en.cppreference.com/w/cpp/container/multiset)
- [multimap](https://en.cppreference.com/w/cpp/container/multimap)

## Properties

- sorted
- set/map has unique keys, multiset/multimap allows duplicated keys
- the insertion order of duplicated keys is preserved
- internally implemented as [red-black trees](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree) (in most STL
  libraries)

## Time complexity

Some specific member functions are exceptions, see below.

|        | Amortized (using hint) | Worst Case    |
|--------|------------------------|---------------|
| Search | $ O(\log n) $          | $ O(\log n) $ |
| Insert | $ O(1) $               | $ O(\log n) $ |
| Delete | $ O(1) $               | $ O(\log n) $ |

# Member Functions

## Insertion

(not comprehensive)

**unhinted insert**

> ```cpp
> std::pair<iterator,bool> insert(const value_type& value);
> std::pair<iterator,bool> insert(value_type&& value);
> 
> template<class... Args>
>   std::pair<iterator,bool> emplace(Args&&... args);
> ```
>
> $ O(\log n) $
>
> Returns an iterator to the inserted element (or to the element that prevented the insertion) + a bool value set to
> true if the insertion took place.
>
> For multiset/multimap, if the container has elements with equivalent key, inserts at the upper bound of that range.
> In other words, insertion order is preserved.


**hinted insert**

> ```cpp
> iterator insert(const_iterator hint, const value_type& value);
> iterator insert(const_iterator hint, value_type&& value);
> 
> template <class... Args>
>   iterator emplace_hint(const_iterator hint, Args&&... args);
> ```
>
> `hint` is an iterator to the position before which the new element will be inserted.
>
> Amortized $O(1)$ if the insertion happens in the position just before the hint, $O(\log n)$ otherwise.
>
> Insertion order is probably not preserved.

## Search

(not comprehensive)

**count**

> ```cpp
> size_type count(const Key& key) const;
> ```
>
> $O(\log n)$
> or $O(\log n + m)$ where $m$ is the number of elements that have key `key`
>
> Returns the number of elements with key that compares equivalent to the specified argument.


**find**

> ```cpp
> iterator find(const Key& key);
> const_iterator find(const Key& key) const;
> ```
>
> $O(\log n)$
>
> Returns an iterator to an element with key equivalent to key. If no such element is found, past-the-end
> iterator is returned.


**contains**

> ```cpp
> bool contains(const Key& key) const; // since C++20
> ```
>
> $O(\log n)$


**equal_range**

> ```cpp
> std::pair<iterator,iterator> equal_range(const Key& key);
> std::pair<const_iterator,const_iterator> equal_range(const Key& key) const;
> ```
>
> $O(\log n)$
>
> Returns a range containing all elements with the given key in the container.
>
> The range is defined by two iterators:
>
> 1. pointing to the first element that is not less than key (lower_bound()). Past-the-end iterator is returned if not
     found.
> 2. pointing to the first element greater than key (upper_bound()). Past-the-end iterator is returned if not
     found.
>
> For multiset/multimap: the order of equivalent
> elements in the equal range is the order of insertion unless hinted insert or emplace_hint was used to insert an
> element at a different position.

**lower_bound**

> ```cpp
> iterator lower_bound(const Key& key);
> const_iterator lower_bound(const Key& key) const;
> ```
>
> $O(\log n)$
>
> Returns an iterator pointing to the first element that is not less than key.
> If no such element is found, a past-the-end iterator is returned.

**upper_bound**

> ```cpp
> iterator upper_bound(const Key& key);
> const_iterator upper_bound(const Key& key) const;
> ```
>
> $O(\log n)$
>
> Returns an iterator pointing to the first element that is greater than key.
> If no such element is found, a past-the-end iterator is returned.

## Deletion

**erase**

(not comprehensive)

> ```cpp
> iterator erase(iterator pos);
> iterator erase(const_iterator pos);
> ```
>
> Removes the element at pos.
> Returns an iterator following the last removed element.
>
> Amortized $O(1)$

> ```cpp
> iterator erase(const_iterator first, const_iterator last);
> ```
>
> Removes the elements in the range $[first, last)$. Returns the number of elements removed.
>
> $ O(\log(n) + \text{std::distance(first, last)}) $

> ```cpp
> size_type erase(const Key& key);
> ```
>
> Removes all elements with the key equivalent to key. Returns the number of elements removed.
>
> $O(\log(n) + \text{count(key)})$

# UNORDERED_SET/UNORDERED_MAP/UNORDERED_MULTISET/UNORDERED_MULTIMAP
------------------------------------------------------------------------------------------

- [unordered_set](https://en.cppreference.com/w/cpp/container/unordered_set)
- [unordered_map](https://en.cppreference.com/w/cpp/container/unordered_map)
- [unordered_multiset](https://en.cppreference.com/w/cpp/container/unordered_multiset)
- [unordered_multimap](https://en.cppreference.com/w/cpp/container/unordered_multimap)

## Properties

- NOT sorted
- unordered_set/unordered_map has unique keys, unordered_multiset/unordered_multimap allows duplicated keys

## Time complexity

Some specific member functions are exceptions, see below.

|        | Average  | Worst Case |
|--------|----------|------------|
| Search | $ O(1) $ | $ O(n) $   |
| Insert | $ O(1) $ | $ O(n) $   |
| Delete | $ O(1) $ | $ O(n) $   |

## Insertion

(not comprehensive)

**unhinted insert**

> ```cpp
> std::pair<iterator,bool> insert(const value_type& value);
> std::pair<iterator,bool> insert(value_type&& value);
>
> template<class... Args>
>   std::pair<iterator,bool> emplace(Args&&... args);
> ```
>
> Returns an iterator to the inserted element (or to the element that prevented the insertion) + a bool value set to
> true if the insertion took place.


**hinted insert**

> ```cpp
> iterator insert(const_iterator hint, const value_type& value);
> iterator insert(const_iterator hint, value_type&& value);
> 
> template <class... Args>
>   iterator emplace_hint(const_iterator hint, Args&&... args);
> ```
>
> `hint` is used as a non-binding suggestion as to where to start the search and insert the content.

## Search

(not comprehensive)

**count**

> ```cpp
> size_type count(const Key& key) const;
> ```
>
> - Average $O(m)$ where $m$ is the number of elements that have key `key`
> - Worse $O(n)$
>
> Returns the number of elements with key that compares equivalent to the specified argument.


**find**

> ```cpp
> iterator find(const Key& key);
> const_iterator find(const Key& key) const;
> ```
>
> - Average $O(1)$
> - Worse $O(n)$
>
> Returns an iterator to an element with key equivalent to key. If no such element is found, past-the-end
> iterator is returned.


**contains**

> ```cpp
> bool contains(const Key& key) const; // since C++20
> ```
>
> - Average $O(1)$
> - Worse $O(n)$


**equal_range**

> ```cpp
> std::pair<iterator,iterator> equal_range(const Key& key);
> std::pair<const_iterator,const_iterator> equal_range(const Key& key) const;
> ```
>
> - Average $O(m)$ where $m$ is the number of elements that have key `key`
> - Worse $O(n)$
>
> Returns a range containing all elements with the given key in the container.
>
> The range is defined by two iterators:
>
> 1. pointing to the first element that is not less than key (lower_bound()). Past-the-end iterator is returned if not
     found.
> 2. pointing to the first element greater than key (upper_bound()). Past-the-end iterator is returned if not
     found.
>

## Deletion

**erase**

> ```cpp
> iterator erase(iterator pos);
> iterator erase(const_iterator pos);
> ```
>
> Removes the element at pos.
> Returns an iterator following the last removed element.
>
> - Average $O(1)$
> - Worse $O(n)$
>

> ```cpp
> iterator erase(const_iterator first, const_iterator last);
> ```
>
> Removes the elements in the range $[first, last)$. Returns the number of elements removed.
>
> - Average $ O(\text{std::distance(first, last)}) $
> - Worse $O(n)$
>

> ```cpp
> size_type erase(const Key& key);
> ```
>
> Removes all elements with the key equivalent to key. Returns the number of elements removed.
>
> - Average $ O(\text{count(key)}) $
> - Worse $O(n)$
>

# Implementations
------------------------------------------------------------------------------------------

TODO
