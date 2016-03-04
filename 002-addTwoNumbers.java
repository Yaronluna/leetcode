/** 
 * Definition for singly-linked list. 
 * public class ListNode { 
 *     int val; 
 *     ListNode next; 
 *     ListNode(int x) { val = x; } 
 * } 
 */ 
 
public class Solution { 
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {  
      // use recursion 
      return list_node_add(l1, l2, 0); 
    }  
    public static ListNode list_node_add(ListNode l1, ListNode l2, int carry_over){ 
      // base case
      if(l1 == null && l2 == null && carry_over == 0){ 
        return null; 
      } 
      
      int sum    = carry_over + (l1==null?0:l1.val) + (l2==null?0:l2.val); 
      carry_over = 0; 
       
      // since we add two single digit nums in here, max sum is 19, so minus 10 is enough
      if(sum >= 10){ 
        sum        = sum - 10; 
        carry_over = 1; 
      } 
       
      ListNode buffer = new ListNode(sum); 
      buffer.next = list_node_add(l1==null?null:l1.next, l2==null?null:l2.next, carry_over);
      
      return buffer; 
    } 
 
}
