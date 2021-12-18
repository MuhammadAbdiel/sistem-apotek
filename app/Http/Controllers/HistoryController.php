<?php

namespace App\Http\Controllers;

use App\Models\DetailOrder;
use App\Models\Order;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
    public function index()
    {
        return view('landing-page.history.index', [
            'title' => 'History',
            'orders' => Order::where('user_id', auth()->user()->id)->where('status', '!=', 0)->get()
        ]);
    }

    public function detail(Order $order)
    {
        return view('landing-page.history.detail', [
            'title' => 'Detail',
            'order' => $order,
            'detailOrders' => DetailOrder::where('order_id', $order->id)->get()
        ]);
    }
}
